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
        Route::inertia('/dashboard', 'Dashboard', [])->name('dashboard');
        Route::get('/export/cctvs', [\App\Http\Controllers\Admin\ExportController::class, 'cctvs'])->name('export.cctvs');
    });
});

// User prefixed routes
Route::prefix('user')->name('user.')->group(function () {
    Route::get('/login', [\App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'create'])->name('login');
    Route::middleware(['auth', 'verified', 'role:user|admin'])->group(function () {
        Route::inertia('/dashboard', 'Dashboard', [])->name('dashboard');
        Route::inertia('/maps', 'User/Maps/index', [])->name('maps');
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