<?php

use App\Http\Controllers\BookController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [BookController::class, 'index'])->name('dashboard');

    Route::get('books/create', [BookController::class, 'create'])->name('books.create');
    Route::post('books/create', [BookController::class, 'store'])->name('books.store');
    Route::get('books/review', [BookController::class, 'review'])->name('books.review');
    Route::patch('books/{book}/review', [BookController::class, 'handleReviewStatus'])->name('books.handleReviewStatus');
});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
