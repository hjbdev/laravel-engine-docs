# Engine Route Macro

The `engine` route macro provides a convenient way to expose a POST endpoint for dynamic model field processing using the Engine package.

## Registration

The macro is registered automatically in the package’s `ServiceProvider`:

```php
Route::engine();
```

This registers a POST route at `/engine`.

## Endpoint

**POST** `/engine`

### Request Body

-   `_model` (string, required): The fully qualified class name of the model to process.

Any additional request data will be passed to the model’s field logic.

### Example Request

```json
POST /engine
Content-Type: application/json

{
  "_model": "App\\Models\\User",
  "first_name": "Harry",
  "show_last": true
}
```

### Validation

-   The `_model` parameter is required and must be a string.
-   If the model uses Laravel’s morph map, the macro will resolve the morph alias to the actual class.
-   If the class does not exist, an exception is thrown.

### Response

Returns the result of `Engine::request($model, $request)`, which typically includes the model’s fields, groups, and their visibility based on the request data.

### Error Handling

-   If `_model` is missing or not a valid class, a 422 or 500 error is returned.
---

## Usage Example in `routes/web.php`

```php
use Illuminate\Support\Facades\Route;

Route::engine();
```

---

## Summary

The `engine` route macro is designed for dynamic form or field rendering scenarios, such as admin panels or form builders, where the frontend can POST a model name and context to receive a tailored field/group structure in response.
