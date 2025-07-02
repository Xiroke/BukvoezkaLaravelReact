<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('book_cards', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('author');
            // если да - то хочу поделится книгой, иначе хочу получить
            $table->boolean('is_my_book');

            // не заполняются вручную
            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete();
            // принят или отклонен ли администратором, null - не рассмотрен
            $table->boolean('is_valid')->nullable();
            // причина отклонения
            $table->string('reject_reason')->nullable();
            $table->timestamps();

            // необязательные
            $table->string('publisher')->nullable();
            $table->integer('year')->nullable();
            //тип переплета
            $table->enum('typeBinding', ['твердый', 'мягкий'])->nullable();
            // качество
            $table->enum('quality', ['идеальное', 'нормальное', 'требует внимания', 'годится чтобы подпирать ножку стола'])->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('book_cards');
    }
};
