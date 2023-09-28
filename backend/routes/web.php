<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Rota de exibição do formulário de login
Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');
// Rota de execução do login
//Route::post('/login', 'Auth\LoginController@login');
// Rota de logout
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

Route::middleware(['auth'])->group(function () {
    Route::resource('users', 'UserController');
    Route::resource('posts', 'PostController');
    Route::resource('posts.comments', 'CommentController');
});
