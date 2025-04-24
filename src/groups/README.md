# Groups

If you have a form separated into groups, you can use the `Group` field.

```php
Group::create('Personal', [
    Text::create('First Name'),
    Text::create('Last Name')->visible('show_last', '=', true),
])
```

You can add extra data with the optional third parameter. This is if you require extra data (such as a description) for your frontend.

```php
Group::create('Personal', [
    Text::create('First Name'),
    Text::create('Last Name')->visible('show_last', '=', true),
], [
    'description' => 'This is your personal information.'
])
```

## `visible($key = true, $operator, $value)`

Controls whether the group is visible, can be used in multiple ways:

```php
Group::create('Personal', [
    Text::create('First Name'),
    Text::create('Last Name')->visible('show_last', '=', true),
])->visible('last_name', '!=', null),
```