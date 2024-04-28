import secrets, os, binascii, random

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

FLAG = open("flag.txt").read() if os.path.exists("flag.txt") else "MVHacks{example_flag}"
FLAG_AS_INT = int(binascii.hexlify(FLAG.encode()), 16)

center = secrets.randbits(2048) | 1 # generate a 2048 bit number
p = center # generate p for rsa by getting the next largest prime
while True:
    p += 2
    if is_prime(p):
        break

q = p # and the next largest prime after that
while True:
    q += 2
    if is_prime(q):
        break

# hint: try running this script with the next line uncommented on your own machine
# print(p, q)
# what's "funny" about p and q?

N = p * q
e = 65537
result = pow(FLAG_AS_INT, e, N)
print(f"{N = }")
print(f"{e = }")
print(f"{result = }")
