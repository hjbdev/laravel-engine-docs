# Getting Started

You can install Laravel Engine with composer.

```bash
composer require hjbdev/laravel-engine
```

Once you've done that you can begin to

## Prepare your models

Engine supplies you with the `Engine\HasFields` trait to get you started. Apply this to your model.

You then need to create a public function `fields` to define your form fields.

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Engine\HasFields;
use Engine\Fields\Text;

class Post extends Model
{
    use HasFields;

    public function fields() {
        return [
            Text::create('Title')->required()->rules('string', 'max:150'),
            Text::create('Content')->visible('title', '!==', null)->rules('string', 'max:2000')
        ];
    }
}
```