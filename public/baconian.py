def convertToBase2(n):
    if n == 0:
        return ""
    else:
        return convertToBase2(n//2) + str(n%2)

def decodeBaconian(cipher):
    # help! someone deleted the code that was here!


    return decoded

def main():
    lucky_number = 3*3*7*43060050270863
    print(lucky_number)
    base2 = "000" + convertToBase2(lucky_number)
    flag = "MVHACKS\{" + decodeBaconian(base2) + "\}"
    print(flag)
    print(base2)

main()
