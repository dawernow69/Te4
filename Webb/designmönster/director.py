from pet import Petfrom builder 
import PetBuilder

class Director:
	def __init__(self):
		pass

	def order(self) -> Pet:
		species = ""
		pet = None

		print("Welcome to Dr Frankenstein's kennel and workshop!")
		while not (species == "dog" or species == "cat"):
			species = input("What kind of pet would you like? (dog/cat)\n")
		name = input("A wise choice! What will their name be?\n")
		sex = input("That's a good name! Would you like a male or female " + species + "?\n")
		legs = input("That makes sense. How many legs would you like it to have?\n")
		tails = input("A bold decision! How many tails?\n")
		heads = input("Oooh, I like that! How many heads?\n")
		print("Well, that's a bit unorthodox. Any way, here's your " + species + ". Enjoy!")

		return PetBuilder()\
			.a(species)\
			.with_name(name)\
			.of_sex(sex)\
			.with_heads(heads)\
			.with_legs(legs)\
			.with_tails(tails)\
			.build()

director = Director()
pet = director.order()
pet.present()