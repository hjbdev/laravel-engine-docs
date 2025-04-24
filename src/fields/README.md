# Fields

All fields extend a base field which includes common methods.

## `required($key = true, $operator, $value)`

Controls whether the field is required, can be used in multiple ways:

```php
Field::create('Name')->required(true);

Field::create('Name')->required('user_has_name', '=', true);

Field::create('Name')->required('user_has_name', true);

Field::create('Name')->required(function () {
    return true;
});
```

## `visible($key = true, $operator, $value)`

Controls whether the field is visible, can be used in multiple ways:

```php
Field::create('Name')->visible(true);

Field::create('Name')->visible('user_has_name', '=', true);

Field::create('Name')->visible('user_has_name', true);

Field::create('Name')->visible(function () {
    return true;
});
```

## `name(string $name)`

Set the field name.

This is automatically set to the snake case version of the supplied label.

```php
Field::create('Name')->name('name');
```

## `default($value)`

Set the default value of the field.

```php
Field::create('Name')->default('Harry');
```

## `creationRules(...$rules)`

Set the validation rules for this field when the model is being created.

```php
Field::create('Name')->creationRules('unique', 'max:255');
```

## `updateRules(...$rules)`

Set the validation rules for this field when the model is being updated.

```php
Field::create('Name')->updateRules('unique', 'max:255');
```

## `rules(...$rules)`

Set the global validation rules for this field.

```php
Field::create('Name')->rules('unique', 'max:255');
```