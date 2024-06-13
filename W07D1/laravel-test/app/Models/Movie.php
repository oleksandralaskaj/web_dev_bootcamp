<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\MovieType;
use App\Models\MovieRequest;

class Movie extends Model
{
    use HasFactory;

    public function movieType()
    {
        return $this->belongsTo(MovieType::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function requests()
    {
        return $this->hasMany(MovieRequest::class);
    }
}
