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

Route::get("/comments", [CommentController::class, "index"]); // Rota para listar todos os comentários
Route::post("/comments/{post_id}", [CommentController::class, "store"]); // Rota para criar um novo comentário
Route::get("/comments/{id}", [CommentController::class, "show"]); // Rota para exibir um único comentário
Route::patch("/comments/{id}", [CommentController::class, "update"]); // Rota para atualizar um comentário
Route::delete("/comments/{id}", [CommentController::class, "destroy"]); // Rota para excluir um comentário

