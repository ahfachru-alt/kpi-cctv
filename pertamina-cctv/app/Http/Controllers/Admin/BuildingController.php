<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Building;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BuildingController extends Controller
{
    public function index(Request $request)
    {
        $buildings = Building::query()
            ->when($request->string('q'), fn($q,$t)=>$q->where('name','like',"%$t%"))
            ->orderBy('id','desc')->paginate(15)->withQueryString();
        return Inertia::render('Admin/Maps/index', [ 'buildings' => $buildings, 'filters' => ['q'=>(string)$request->string('q')] ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Maps/create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required','string','max:255'],
            'latitude' => ['nullable','numeric'],
            'longitude' => ['nullable','numeric'],
        ]);
        Building::create($data);
        return redirect()->route('admin.maps.index')->with('success','Building created');
    }

    public function edit(Building $building)
    {
        return Inertia::render('Admin/Maps/edit', [ 'building' => $building ]);
    }

    public function update(Request $request, Building $building)
    {
        $data = $request->validate([
            'name' => ['required','string','max:255'],
            'latitude' => ['nullable','numeric'],
            'longitude' => ['nullable','numeric'],
        ]);
        $building->update($data);
        return redirect()->route('admin.maps.index')->with('success','Building updated');
    }

    public function destroy(Building $building)
    {
        $building->delete();
        return redirect()->route('admin.maps.index')->with('success','Building deleted');
    }
}

