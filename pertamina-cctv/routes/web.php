<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Admin prefixed routes
Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/login', [\App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'create'])->name('login');
    Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
        Route::get('/dashboard', [\App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('dashboard');
        Route::get('/export/cctvs', [\App\Http\Controllers\Admin\ExportController::class, 'cctvs'])->name('export.cctvs');
        Route::get('/users', [\App\Http\Controllers\Admin\UserController::class, 'index'])->name('users.index');
        Route::get('/users/create', [\App\Http\Controllers\Admin\UserController::class, 'create'])->name('users.create');
        Route::post('/users', [\App\Http\Controllers\Admin\UserController::class, 'store'])->name('users.store');
        Route::get('/users/{user}/edit', [\App\Http\Controllers\Admin\UserController::class, 'edit'])->name('users.edit');
        Route::put('/users/{user}', [\App\Http\Controllers\Admin\UserController::class, 'update'])->name('users.update');
        Route::delete('/users/{user}', [\App\Http\Controllers\Admin\UserController::class, 'destroy'])->name('users.destroy');

        // Maps (Buildings)
        Route::get('/maps', [\App\Http\Controllers\Admin\BuildingController::class, 'index'])->name('maps.index');
        Route::get('/maps/create', [\App\Http\Controllers\Admin\BuildingController::class, 'create'])->name('maps.create');
        Route::post('/maps', [\App\Http\Controllers\Admin\BuildingController::class, 'store'])->name('maps.store');
        Route::get('/maps/{building}/edit', [\App\Http\Controllers\Admin\BuildingController::class, 'edit'])->name('maps.edit');
        Route::put('/maps/{building}', [\App\Http\Controllers\Admin\BuildingController::class, 'update'])->name('maps.update');
        Route::delete('/maps/{building}', [\App\Http\Controllers\Admin\BuildingController::class, 'destroy'])->name('maps.destroy');

        // Location (Rooms)
        Route::get('/location', [\App\Http\Controllers\Admin\RoomController::class, 'index'])->name('location.index');
        Route::get('/location/create', [\App\Http\Controllers\Admin\RoomController::class, 'create'])->name('location.create');
        Route::post('/location', [\App\Http\Controllers\Admin\RoomController::class, 'store'])->name('location.store');
        Route::get('/location/{room}/edit', [\App\Http\Controllers\Admin\RoomController::class, 'edit'])->name('location.edit');
        Route::put('/location/{room}', [\App\Http\Controllers\Admin\RoomController::class, 'update'])->name('location.update');
        Route::delete('/location/{room}', [\App\Http\Controllers\Admin\RoomController::class, 'destroy'])->name('location.destroy');

        // Table (CCTVs)
        Route::get('/table', [\App\Http\Controllers\Admin\CctvController::class, 'index'])->name('table.index');
        Route::get('/table/create', [\App\Http\Controllers\Admin\CctvController::class, 'create'])->name('table.create');
        Route::post('/table', [\App\Http\Controllers\Admin\CctvController::class, 'store'])->name('table.store');
        Route::get('/table/{cctv}/edit', [\App\Http\Controllers\Admin\CctvController::class, 'edit'])->name('table.edit');
        Route::put('/table/{cctv}', [\App\Http\Controllers\Admin\CctvController::class, 'update'])->name('table.update');
        Route::delete('/table/{cctv}', [\App\Http\Controllers\Admin\CctvController::class, 'destroy'])->name('table.destroy');

        // Contact
        Route::get('/contact', [\App\Http\Controllers\Admin\ContactController::class, 'index'])->name('contact.index');
        Route::get('/contact/create', [\App\Http\Controllers\Admin\ContactController::class, 'create'])->name('contact.create');
        Route::post('/contact', [\App\Http\Controllers\Admin\ContactController::class, 'store'])->name('contact.store');
        Route::get('/contact/{contact}/edit', [\App\Http\Controllers\Admin\ContactController::class, 'edit'])->name('contact.edit');
        Route::put('/contact/{contact}', [\App\Http\Controllers\Admin\ContactController::class, 'update'])->name('contact.update');
        Route::delete('/contact/{contact}', [\App\Http\Controllers\Admin\ContactController::class, 'destroy'])->name('contact.destroy');
    });
});

// User prefixed routes
Route::prefix('user')->name('user.')->group(function () {
    Route::get('/login', [\App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'create'])->name('login');
    Route::middleware(['auth', 'verified', 'role:user|admin'])->group(function () {
        Route::inertia('/dashboard', 'Dashboard', [])->name('dashboard');
        Route::inertia('/maps', 'User/Maps/index', [])->name('maps');
        Route::get('/location', [\App\Http\Controllers\User\LocationController::class, 'index'])->name('location.index');
        Route::get('/location/{building}', [\App\Http\Controllers\User\LocationController::class, 'rooms'])->name('location.rooms');
        Route::get('/room/{room}', [\App\Http\Controllers\User\LocationController::class, 'cctvs'])->name('room.cctvs');
        Route::get('/contact', [\App\Http\Controllers\User\ContactController::class, 'index'])->name('contact');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/cctv/{id}/live', [\App\Http\Controllers\CctvController::class, 'live'])->name('cctv.live');
});

require __DIR__.'/auth.php';

// Google OAuth routes
Route::get('/auth/google/redirect', function () {
    return Socialite::driver('google')->redirect();
})->name('auth.google.redirect');

Route::get('/auth/google/callback', function () {
    $googleUser = Socialite::driver('google')->user();
    $user = \App\Models\User::firstOrCreate(
        ['email' => $googleUser->getEmail()],
        [
            'name' => $googleUser->getName() ?: $googleUser->getNickname() ?: 'User',
            'password' => bcrypt(str()->random(32)),
            'email_verified_at' => now(),
        ]
    );
    if (!$user->hasAnyRole(['user','admin'])) {
        $user->assignRole('user');
    }
    Auth::login($user);
    return redirect()->intended(route('user.dashboard', absolute: false));
});

// Protected API for maps
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/api/buildings', [\App\Http\Controllers\Api\MapController::class, 'buildings']);
    Route::get('/api/cctvs', [\App\Http\Controllers\Api\MapController::class, 'cctvs']);
});