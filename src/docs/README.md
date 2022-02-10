# Introduction

One of the biggest things that turns me off starting new projects is getting basic boilerplate done. Creating forms to accept user input is _so boring_. I just want to get straight to the cool stuff.

This is where Laravel Engine comes in. Engine integrates with your models and provides an API route for your frontend to retrieve form structures, allowing you to have a generic form component on the frontend that just has to loop through the array.

The syntax is inspired by Laravel Nova, so it'll be familiar and a joy to use.

```php
public function fields() {
    return [
        Text::create('First Name')->required()->rules('string', 'max:40'),
        Text::create('Last Name')->visible('first_name', '!==', null)->rules('string', 'max:40')
    ];
}
```

In the above example, Last Name field will not show up until the First Name field is not null. We've also specified our validation rules in advance. Nice and neat.