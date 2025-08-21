<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Cctv extends Model
{
    use HasFactory;

    protected $fillable = [
        'building_id',
        'room_id',
        'name',
        'ip',
        'status',
        'latitude',
        'longitude',
        'hls_path',
    ];

    public function building(): BelongsTo
    {
        return $this->belongsTo(Building::class);
    }

    public function room(): BelongsTo
    {
        return $this->belongsTo(Room::class);
    }
}

