<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Models\BookCard;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index(Request $request) {
        $currentUser = auth()->user();

        return Inertia::render('dashboard', ['books' => $currentUser->bookCards]);
    }

    public function create(Request $request) {
        return Inertia::render('book/create');
    }

    public function store(StoreBookRequest $request) {
        $validated = $request->validated();

        $validated['user_id'] = auth()->id();

        BookCard::create($validated);

        return redirect()->route('dashboard');
    }

    public function review(Request $request) {
        $bookCard = BookCard::whereNull('is_valid')->oldest()->paginate(6);

        return Inertia::render('book/review', ['books' => $bookCard]);
    }

    public function handleReviewStatus(Request $request, BookCard $book) {
        $validated = $request->validate([
            'is_accept' => 'required|boolean',
            'reject_reason' => 'required|string|min:2',
        ]);
        $isAdmin = auth()->user()->is_admin;

        // у пользователя есть возможность отклонить свою карточку
        if (!$isAdmin && $validated['is_accept'] == true) {
            return redirect()->back();
        }

        $bookCard = BookCard::where('id', '=', $book->id)->first();
        $bookCard->is_valid = $validated['is_accept'];
        $bookCard->reject_reason = $validated['reject_reason'];
        $bookCard->save();

        return redirect()->back();
    }
}
