x = {'foo': 'bar'}
y = {'baz': x}
z = y['baz']['foo']
print(z)

def find_max(nums):
  max_num = float('-inf')
  for num in nums:
    if num > max_num:
      max_num = num
  return max_num

print(find_max([4, 20, 5, 2, 18]));