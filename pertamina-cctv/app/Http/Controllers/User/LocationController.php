<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Building;
use App\Models\Room;
use App\Models\Cctv;
use Inertia\Inertia;

class LocationController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Location/index', [
            'buildings' => Building::select('id','name')->orderBy('name')->get(),
        ]);
    }

    public function rooms(Building $building)
    {
        return Inertia::render('User/Room/index', [
            'building' => $building->only(['id','name']),
            'rooms' => Room::where('building_id', $building->id)->select('id','name')->orderBy('name')->get(),
        ]);
    }

    public function cctvs(Room $room)
    {
        return Inertia::render('User/Cctv/index', [
            'room' => $room->only(['id','name','building_id']),
            'cctvs' => Cctv::where('room_id', $room->id)->select('id','name','status')->orderBy('id')->get(),
        ]);
    }
}

