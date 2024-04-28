import secrets, os, binascii

def is_prime(n):
    d = n - 1
    s = 1
    while d % 2 == 0:
        s += 1
        d //= 2

    for _ in range(40):
        a = secrets.randbelow(n - 3) + 2
        x = pow(a, d, n)
        y = -1
        for _ in range(s):
            y = (x * x) % n
            if y == 1 and x != 1 and x != n - 1:
                return False
            x = y
        if y != 1:
            return False
    return True

def generate_prime():
    while True:
        a = secrets.randbits(2048) | 1 # generate a 2048-bit odd number
        if is_prime(a):
            return a

p, q = generate_prime(), generate_prime()

N = p * q

FLAG = open("flag.txt").read() if os.path.exists("flag.txt") else "MVHacks{example_flag}"
FLAG_AS_INT = int(binascii.hexlify(FLAG.encode()), 16)
e = 65537

result = pow(FLAG_AS_INT, e, N)
print(f"{p = }")
print(f"{q = }")
print(f"{N = }")
print(f"{e = }")
print(f"{result = }")