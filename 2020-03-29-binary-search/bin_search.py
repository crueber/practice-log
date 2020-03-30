"""Write a binary search function for a number between 1<num<101"""
def binary_search(min_range, max_range, guess):

    count = 1
    numbers = list(range(min_range, max_range))
    mid = len(numbers) // 2

    while numbers[mid] != guess:
        middle_value = numbers[mid]
        if middle_value > guess:
            numbers = numbers[0:mid]
        if middle_value < guess:
            numbers = numbers[mid:]
        count += 1
        mid = len(numbers) // 2

    return count

print(binary_search(0, 101, 64))
