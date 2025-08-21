<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Building;
use App\Models\Cctv;
use Illuminate\Http\Request;

class MapController extends Controller
{
    public function buildings()
    {
        return Building::select('id','name','latitude','longitude')
            ->orderBy('name')
            ->get();
    }

    public function cctvs(Request $request)
    {
        $query = Cctv::query()
            ->select('id','name','status','latitude','longitude','building_id','room_id');

        if ($request->filled('status')) {
            $statuses = explode(',', (string) $request->string('status'));
            $query->whereIn('status', $statuses);
        }

        if ($request->filled('building_id')) {
            $query->where('building_id', $request->integer('building_id'));
        }

        return $query->limit(2000)->get();
    }
}

