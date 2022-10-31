# Behavioral Design Patterns
Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects.

- <b>Chain of Responsibility:</b> Lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.
- <b>Command:</b> Turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request's execution, and support undoable operations.
- <b>Iterator:</b> Lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc).
- <b>Mediator:</b> Lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.
- <b>Memento:</b> Lets you save and restore the previous state of an object without revealing the details of its implementation.
- <b>Observer:</b> Lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they're observing.
- <b>State:</b> Lets an object alter it's behavior when it's internal state changes. It appears as if the object changed it's class.
- <b>Strategy:</b> Lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.
- <b>Template Method:</b> Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing it's structure.
- <b>Visitor:</b> Lets you separate algorithms from the objects on which they operate.