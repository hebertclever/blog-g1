<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(string $post)
    {
        return Comment::where('post_id', $post)->get();
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, string $post)
    {
        $data = $request->all();
        $data['post_id'] = $post;

        $comment = Comment::create($data);

        return $comment;
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $comment = Comment::with('user', 'post')->findOrFail($id);
        return $comment;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $post, string $id)
    {
        $comment = Comment::where('post_id', $post)->findOrFail($id);

        $data = $request->all();

        // Aqui você deve atualizar apenas os campos relevantes do comentário.
        // Por exemplo, se você tiver campos como "content" no seu modelo Comment,
        // você pode atualizá-los assim:

        if (isset($data['content'])) {
            $comment->content = $data['content'];
        }

        // Continue fazendo as atualizações dos campos relevantes aqui...

        $comment->save();

        return $comment;
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $post, string $id)
    {
        $comment = Comment::where('post_id', $post)->findOrFail($id);
        $comment->delete();

        return response()->json([], 204);
    }
}
