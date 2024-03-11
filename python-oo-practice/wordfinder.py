"""Word Finder: finds random words from a dictionary."""

import random

    
class WordFinder:
    def __init__(self, url):
        self.url = url 
        file = open(self.url, "r")
        with file as f:
            newlist = [line.rstrip() for line in f]
        self.newlist = newlist
        self.nums = len(self.newlist)
        self.greet()
        return
    
    def greet(self):
        print(f"{self.nums} words read")

    def random(self):
        selected_item = random.choice(self.newlist)
        return selected_item
    
class SpecialWordFinder(WordFinder):
     def parse(self, dict_file):
        return [w.strip() for w in dict_file
                if w.strip() and not w.startswith("#")]