<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Offer;

class Offeree extends Model
{
    use HasFactory;

    public function offers(): HasMany
    {
        return $this->hasMany(Offer::class, 'offeree_id', "id");
    }
}
