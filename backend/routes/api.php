<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
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

<<<<<<< HEAD
Route::get("/users", [UserController::class, "index"]);
Route::post("/users", [UserController::class, "store"]);
Route::get("/users/{id}", [UserController::class, "show"]);
Route::patch("/users/{id}", [UserController::class, "update"]);
Route::delete("/users/{id}", [UserController::class, "destroy"]);

Route::get("/posts", [PostController::class, "index"]);
Route::post("/posts", [PostController::class, "store"]);
Route::get("/posts/{id}", [PostController::class, "show"]);
Route::patch("/posts/{id}", [PostController::class, "update"]);
Route::delete("/posts/{id}", [PostController::class, "destroy"]);

Route::get("/comment", [CommentController::class, "index"]);
Route::post("/comment", [CommentController::class, "store"]);
Route::get("/comment/{id}", [CommentController::class, "show"]);
Route::patch("/comment/{id}", [CommentController::class, "update"]);
Route::delete("/comment/{id}", [CommentController::class, "destroy"]);
=======
// Rotas para autenticação
Route::post('/login', '\App\Http\Controllers\Auth\LoginController@login');
Route::middleware('auth:sanctum')->post('/logout', '\App\Http\Controllers\Auth\LoginController@logout');

// Grupo de rotas protegidas pelo middleware auth:sanctum
Route::middleware(['auth:sanctum'])->group(function () {

    // Rotas para os usuários
    Route::apiResource('users', '\App\Http\Controllers\UserController');

    // Rotas para os posts
    Route::apiResource('posts', '\App\Http\Controllers\PostController');

    // Rotas para os comentários
    // Os comentários estão aninhados dentro de posts neste exemplo
    Route::apiResource('posts.comments', '\App\Http\Controllers\CommentController');
});
>>>>>>> 1919ca07aaa50a4d73dcd7b26c3ee1049a90a869
