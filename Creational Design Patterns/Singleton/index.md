# Singleton

## Intent
Singleton lets you ensure that a class has only one instance, while providing a global access point to this instance.

## Problem
Singleton pattern solves two problems at the same time, violating the Single Responsibility Principle:
1. <b>Ensure that a class has just a single instance.</b> Why would anyone want to controll how many instances a class has? The most common reason for this is to control access to some shared resource - for example, a database or a file.
2. <b>Provide a global access point to that instance.</b> Remember those global variables that you used to store some essential objects? While they're very handy, they're also very unsafe since any code can potentially overwrite the contents of those variables and crash the app. Just like a global variable, the Singleton pattern lets you access some object from anywhere in the program. However, it also protects that instance from being overwritten by other code. There's another side to this problem: you don't want the code that soles problem #1 to be scattered all over your program. It's much better to have it within one class, especially if the rest of your code already depends on it.

## Solution
- Make the default constructor private, to prevent other objects from using the ```new``` operator with the Singleton class.
- Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cached object.

## Aplicability
- <b>Use the Singleton pattern when a class in your program should have just a single instance available to all clients; for example, a single database object shared by different parts of the program.</b> The singleton pattern disables all other means of creating objects of a class except for the special creation method. This method either creates a new object or returns an existing one if it has already been created.
- <b>Use the singleton pattern when you need stricter control over global variables.</b>Unline global variables, the Singleton pattern guarantees that there's just one instance of a class. Nothing, except for the Singleton class itself, can replace the cached instance. Note that you can always adjust this limitation and allow creating any number of Singleton instances. The only piece of code that needs changing is the body of the ```getInstance``` method.

## Pros and Cons
<table>
    <thead>
        <tr>
            <th>Pros</th>
            <th>Cons</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>You can be sure that a class has only a single instance.</td>
            <td>Violates the <i>Single Responsibility Principle</i>. The pattern solves two problems at the time.</td>
        </tr>
        <tr>
            <td>You gain a global access point to that instance.</td>
            <td>The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.</td>
        </tr>
        <tr>
            <td>The singleton object is initialized only when it's requested for the first time.</td>
            <td>The pattern requires special treatment in a multithreaded environment so that multiple threads won't create a singleton object several times.</td>
        </tr>
        <tr>
            <td></td>
            <td>It may be difficult to unit test the client code of the Singleton because many test frameworks rely on inheritance when producing mock objects. Since the constructor of the singleton class is private and overriding static methods is impossible in most languages, you will need to think of a creative way to mock the singleton. Or just don't write the tests. Or don't use the Singleton pattern.</td>
        </tr>
    </tbody>
</table>

## Relations with Other Patterns
- A <b>Facade</b> class can often be transformed into a <b>Singleton</b> since a single facade object is sufficient in most cases.
- <b>Flyweight</b> would resemble <b>Singleton</b> if you somehow managed to reduce all shared states of the objects to just one flyweight object. But there are two fundamental differences between these patterns:
  1. There should be only one Singleton instance, whereas a Flyweight class can have multiple instances with different intrinsic states.
  2. The <i>Singleton</i> object can be mutable. Flyweight objects are immutable.
- <b>Abstract Factories</b>, <b>Builders</b>, and <b>Prototypes</b> can all be implemented as <b>Singletons</b>.