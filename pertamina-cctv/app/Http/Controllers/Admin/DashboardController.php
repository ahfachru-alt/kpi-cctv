<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Building;
use App\Models\Room;
use App\Models\Cctv;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'usersOnline' => User::whereNotNull('last_login_at')->where('last_login_at', '>=', now()->subMinutes(15))->count(),
            'usersOffline' => User::count() - User::whereNotNull('last_login_at')->where('last_login_at', '>=', now()->subMinutes(15))->count(),
            'buildings' => Building::count(),
            'rooms' => Room::count(),
            'cctvOnline' => Cctv::where('status','online')->count(),
            'cctvOffline' => Cctv::where('status','offline')->count(),
            'cctvMaintenance' => Cctv::where('status','maintenance')->count(),
        ];

        return Inertia::render('Admin/Dashboard/index', [ 'stats' => $stats ]);
    }
}

