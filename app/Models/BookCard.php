<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookCard extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'author',
        'is_my_book',
        'publisher',
        'year',
        'typeBinding',
        'quality',
        'user_id',
    ];

    protected $casts = [
        'is_valid' => 'boolean',
        'is_my_book' => 'boolean',
    ];
    public function user() {
        return $this->belongsTo(User::class);
    }
}
