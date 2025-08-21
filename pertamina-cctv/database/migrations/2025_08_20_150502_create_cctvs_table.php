<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('cctvs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('building_id')->constrained()->cascadeOnDelete();
            $table->foreignId('room_id')->nullable()->constrained()->nullOnDelete();
            $table->string('name');
            $table->string('ip');
            $table->enum('status', ['online', 'offline', 'maintenance'])->default('online');
            $table->decimal('latitude', 10, 7)->nullable();
            $table->decimal('longitude', 10, 7)->nullable();
            $table->string('hls_path')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cctvs');
    }
};

