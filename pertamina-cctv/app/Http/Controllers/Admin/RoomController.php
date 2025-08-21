<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Building;
use App\Models\Room;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoomController extends Controller
{
    public function index(Request $request)
    {
        $rooms = Room::with('building:id,name')
            ->when($request->integer('building_id'), fn($q,$id)=>$q->where('building_id',$id))
            ->orderBy('id','desc')->paginate(15)->withQueryString();
        return Inertia::render('Admin/Location/index', [
            'rooms' => $rooms,
            'buildings' => Building::select('id','name')->orderBy('name')->get(),
            'filters' => ['building_id' => $request->integer('building_id')],
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Location/create', [ 'buildings' => Building::select('id','name')->orderBy('name')->get() ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'building_id' => ['required','exists:buildings,id'],
            'name' => ['required','string','max:255'],
        ]);
        Room::create($data);
        return redirect()->route('admin.location.index')->with('success','Room created');
    }

    public function edit(Room $room)
    {
        return Inertia::render('Admin/Location/edit', [
            'room' => $room->only(['id','name','building_id']),
            'buildings' => Building::select('id','name')->orderBy('name')->get(),
        ]);
    }

    public function update(Request $request, Room $room)
    {
        $data = $request->validate([
            'building_id' => ['required','exists:buildings,id'],
            'name' => ['required','string','max:255'],
        ]);
        $room->update($data);
        return redirect()->route('admin.location.index')->with('success','Room updated');
    }

    public function destroy(Room $room)
    {
        $room->delete();
        return redirect()->route('admin.location.index')->with('success','Room deleted');
    }
}

