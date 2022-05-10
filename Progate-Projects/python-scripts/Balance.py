wallet = 20
item_price = 2

input_recieve = input("How many are you buying?: ")

total_cost = int(input_recieve) * int(item_price)

balance = int(wallet) - int(total_cost)

print('Your items cost ' + str(total_cost) + ' dollars')

if total_cost == balance:
   print('Purchase Successful!')
   print('Available balance:' + str(balance) + ' dollars')

elif total_cost > balance:
     print('Purchase Unsuccessful!')
     print('Available balance: ' + str(balance) + ' dollars' )

elif total_cost <= balnce:
     print('Purchase Successful!')
     print('Available balance: ' + str(balance) + ' dollars' )

else: 
    print('Nice to meet you')

