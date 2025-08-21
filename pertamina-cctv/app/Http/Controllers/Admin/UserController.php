<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::query()
            ->when($request->string('q'), function ($q, $term) {
                $q->where(function ($w) use ($term) {
                    $w->where('name', 'like', "%$term%")
                      ->orWhere('email', 'like', "%$term%");
                });
            })
            ->orderBy('id', 'desc')
            ->paginate(15)
            ->withQueryString();

        $online = User::whereNotNull('last_login_at')->where('last_login_at', '>=', now()->subMinutes(15))->count();
        $total = User::count();

        return Inertia::render('Admin/User/index', [
            'users' => $users,
            'stats' => [ 'online' => $online, 'offline' => max($total - $online, 0) ],
            'filters' => [ 'q' => (string) $request->string('q') ],
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/User/create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required','string','max:255'],
            'email' => ['required','string','lowercase','email','max:255','unique:users,email'],
            'password' => ['required','string','min:8'],
            'role' => ['required', Rule::in(['admin','user'])],
        ]);

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'role' => $data['role'],
        ]);
        $user->syncRoles([$data['role']]);

        return redirect()->route('admin.users.index')->with('success', 'User created');
    }

    public function edit(User $user)
    {
        return Inertia::render('Admin/User/edit', [ 'user' => [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'role' => $user->role,
        ]]);
    }

    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'name' => ['required','string','max:255'],
            'email' => ['required','string','lowercase','email','max:255', Rule::unique('users','email')->ignore($user->id)],
            'password' => ['nullable','string','min:8'],
            'role' => ['required', Rule::in(['admin','user'])],
        ]);

        $payload = [ 'name' => $data['name'], 'email' => $data['email'], 'role' => $data['role'] ];
        if (!empty($data['password'])) {
            $payload['password'] = bcrypt($data['password']);
        }
        $user->update($payload);
        $user->syncRoles([$data['role']]);

        return redirect()->route('admin.users.index')->with('success', 'User updated');
    }

    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->route('admin.users.index')->with('success', 'User deleted');
    }
}

