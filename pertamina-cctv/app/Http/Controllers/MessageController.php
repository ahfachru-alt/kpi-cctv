<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Message/index', [
            'messages' => Message::latest()->limit(100)->get(['id','from_user_id','to_user_id','content','is_read','created_at'])
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'to_user_id' => ['nullable','exists:users,id'],
            'content' => ['required','string','max:2000'],
        ]);
        $msg = Message::create([
            'from_user_id' => $request->user()->id,
            'to_user_id' => $data['to_user_id'] ?? null,
            'content' => $data['content'],
        ]);
        broadcast(new MessageSent($msg))->toOthers();
        return back();
    }
}

