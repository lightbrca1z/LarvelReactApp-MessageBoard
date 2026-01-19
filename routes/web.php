<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/health', function () {
    return response()->json(['status' => 'OK', 'message' => 'Laravel is running']);
});

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';

Route::post('/update-message', function(){
    $max = request()->number;
    $total = 0;
    for ($i = 0; $i <= $max; $i++) {
        $total += $i;
    }
    return response()->json(['message'=>'total ' . $total]);
})->name('update-message');

Route::get('hello', function () {
    return Inertia::render('hello');
})->name('hello');

Route::get('messageBoard', function () {
    return Inertia::render('messageBoard');
})->name('messageBoard');