<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Endpoint para obter o usuário autenticado
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Grupo de rotas protegidas pelo middleware auth:sanctum
Route::middleware(['auth:sanctum'])->group(function () {

    // Rotas para os usuários
    Route::resource('users', 'UserController');

    // Rotas para os posts
    Route::resource('posts', 'PostController');

    // Rotas para os comentários
    // Os comentários estão aninhados dentro de posts neste exemplo
    Route::resource('posts.comments', 'CommentController');
});
