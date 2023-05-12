const Person = require('./person');

describe('Person', () => {
  it('should call introduce method once', () => {
    const person = new Person('John', 'Doe');
    const introduceSpy = jest.spyOn(person, 'introduce');
    person.introduce();
    expect(introduceSpy).toHaveBeenCalledTimes(1);
    });
});