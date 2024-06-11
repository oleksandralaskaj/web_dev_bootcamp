<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Offeree;

class Offer extends Model
{
    use HasFactory;

    public ?int $id = null;

    public function offeree()
    {
        return $this->belongsTo(Offeree::class) ;
    }
}
