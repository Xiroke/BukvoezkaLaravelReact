<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|min:2',
            'author' => 'required|string|min:2',
            'is_my_book' => 'required|boolean',
            'publisher' => 'nullable|string',
            'year' => 'nullable|integer|min:-5000|max:3000',
            'typeBinding' => ['nullable', 'string', Rule::in(['твердый', 'мягкий'])],
            'quality' => ['nullable', 'string', Rule::in(['идеальное', 'нормальное', 'требует внимания', 'годится чтобы подпирать ножку стола'])],
        ];
    }
}
