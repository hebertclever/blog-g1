<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get all posts by the user.
     */
    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    /**
     * Get all comments by the user.
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    /**
     * Get the user's name in uppercase.
     */
    public function getNameAttribute($value)
    {
        return strtoupper($value);
    }

    /**
     * Scope a query to only include users of a given name.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  string  $name
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeNamed($query, $name)
    {
        return $query->where('name', $name);
    }

    /**
     * Hash the password before saving it to the database.
     *
     * @param  string  $password
     * @return void
     */
    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = bcrypt($password);
    }
}
