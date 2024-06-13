<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\MovieType;

class MovieRequest extends Model
{
//    public ?int $id= null;
//    public ?string $full_name= null;
//    public ?string $email= null;
//    public ?string $name= null;
//    public ?int $movie_type_id= null;

    use HasFactory;

    public function movieType () {
        return $this->belongsTo(MovieType::class);
    }
}
