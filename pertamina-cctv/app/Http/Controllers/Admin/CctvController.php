<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Building;
use App\Models\Room;
use App\Models\Cctv;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CctvController extends Controller
{
    public function index(Request $request)
    {
        $cctvs = Cctv::with('building:id,name','room:id,name')
            ->when($request->integer('building_id'), fn($q,$id)=>$q->where('building_id',$id))
            ->orderBy('id','desc')->paginate(15)->withQueryString();
        return Inertia::render('Admin/Table/index', [
            'cctvs' => $cctvs,
            'buildings' => Building::select('id','name')->orderBy('name')->get(),
            'filters' => ['building_id' => $request->integer('building_id')],
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Table/create', [
            'buildings' => Building::select('id','name')->orderBy('name')->get(),
            'rooms' => Room::select('id','name','building_id')->get(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required','string','max:255'],
            'ip' => ['required','string','max:255'],
            'status' => ['required','in:online,offline,maintenance'],
            'building_id' => ['required','exists:buildings,id'],
            'room_id' => ['nullable','exists:rooms,id'],
            'latitude' => ['nullable','numeric'],
            'longitude' => ['nullable','numeric'],
        ]);
        Cctv::create($data);
        return redirect()->route('admin.table.index')->with('success','CCTV created');
    }

    public function edit(Cctv $cctv)
    {
        return Inertia::render('Admin/Table/edit', [
            'cctv' => $cctv,
            'buildings' => Building::select('id','name')->orderBy('name')->get(),
            'rooms' => Room::select('id','name','building_id')->get(),
        ]);
    }

    public function update(Request $request, Cctv $cctv)
    {
        $data = $request->validate([
            'name' => ['required','string','max:255'],
            'ip' => ['required','string','max:255'],
            'status' => ['required','in:online,offline,maintenance'],
            'building_id' => ['required','exists:buildings,id'],
            'room_id' => ['nullable','exists:rooms,id'],
            'latitude' => ['nullable','numeric'],
            'longitude' => ['nullable','numeric'],
        ]);
        $cctv->update($data);
        return redirect()->route('admin.table.index')->with('success','CCTV updated');
    }

    public function destroy(Cctv $cctv)
    {
        $cctv->delete();
        return redirect()->route('admin.table.index')->with('success','CCTV deleted');
    }
}

