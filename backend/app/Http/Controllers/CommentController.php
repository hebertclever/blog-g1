<?php

namespace App\Http\Controllers;

use App\Models\comments;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return comments::all();
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
    public function store(Request $request)
{
    $data = $request->all();

    $comment = comments::create($data);

    return $comment;
}

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $comment = Comments::findOrFail($id);
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
    public function update(Request $request, string $id)
    {
        $comment = comments::findOrFail($id);

        $data = $request->all();

        if ($request->password) {
            $data["password"] = bcrypt($request->password);
        }

        $comment->update($data);

        return $comment;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $comment = comments::findOrFail($id);
        $comment->delete();

        return response()->json([], 204);
    }
}
