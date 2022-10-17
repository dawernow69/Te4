from abc import ABC, abstractmethod

class Pet(ABC):
	_nbr_of_legs: int = 0
	_nbr_of_heads: int = 0
	_nbr_of_tails: int = 0
	_name: str = ""
	_sex: str = ""
	_species: str = ""

	def __init__(self):
		self._species = "Undefined"

	def get_nbr_of_legs(self) -> int:
		return self._nbr_of_legs

	def set_nbr_of_legs(self, legs: int) -> None:
		self._nbr_of_legs = legs

	def get_nbr_of_heads(self) -> int:
		return self._nbr_of_heads

	def set_nbr_of_heads(self, heads: int) -> None:
		self._nbr_of_heads = heads

	def get_nbr_of_tails(self) -> int:
		return self._nbr_of_tails

	def set_nbr_of_tails(self, tails: int) -> None:
		self._nbr_of_tails = tails

	def get_name(self) -> str:
		return self._name

	def set_name(self, name: str) -> None:
		self._name = name

	def get_sex(self) -> str:
		return self._sex

	def set_sex(self, sex: str) -> None:
		self._sex = sex

	def present(self) -> None:
		print(self.speak_up())
		print("My name is " + self._name + " and I'm a " + self._species)
		print("I have " + str(self._nbr_of_heads) + " heads and " + str(self._nbr_of_legs) + " legs.")
		print("Also, I have " + str(self._nbr_of_tails) + " tails and I am a " + self._sex)
		print("My life is a mess.")

	@abstractmethod
	def speak_up(self) -> str:
		pass