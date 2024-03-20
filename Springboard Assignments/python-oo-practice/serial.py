"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start=0):
        """" Create a new serial generator """
        self.start = self.next = start

    def __repr__(self):
        """" Change the representation of the serial generator """
        return f"SerialGenerator start={self.start} next={self.next}"
    
    def generate(self):
        """ Return Next Serial """
        self.next += 1
        return self.next - 1
    
    def reset(self):
        self.next = self.start
