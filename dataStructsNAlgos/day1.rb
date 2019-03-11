# 1) motivation
# Big O notation
# Algo A is faster than algo B
#  what does it come down to?
#  -input size 
#  -number of steps 

# 2) RAM model of computation (random access machine)
# what is step?
#  + - 1 step
#  - - 1 step
#  * - 1.3 step
#  / - 1.8 step
#  <,> - 1 step 

#  - useless exercise
#  model of computation allows to abstract small and insignificant details
#  -any mathematical comp is one step 

#  -loop n * # of steps in each iteration
 
# 2)Asymptotic analysis

def chop_add(num1, num2)
    # 3 steps(memoryaccess, division, assigning)
    num1 = num1/ 5.0
    # 3 steps
    num2 = num2 / 5.0

    # 300 steps
    300.times do 
        # 3 steps
        num1 = num1 / 2
        # 3 steps
        num2 = num2 / 2
    end 

    # 3 steps
    sum = num1 + num2

    # 300 step, 3 steps
    300.times { sum = sum * 2}

    # one step
    sum * 5
end
# total steps = 2710 steps
#constant time

def iter_add(num1, num2)
    num1.times { num2 = num2 + 1}
    num2
end
#3n + 1 steps
#linear time

#4) The worst case

#big O(n): asymptotic worst case runtime

#5) common big O classifications
# fast to slow
# 0(1) : constant
# 0(logn) : logarithmic
    # x**2 = b 
    # logx(b) = 2
    #think of binary search or looking through phone book- every steps divides input
#O(n) -linear
#(nlogn) - loglineear 
    #merge sort
    #quicksort
        # -best
        # -average
#O(n**2) - quadratic
    #-bubblesort
    #O(n**k) - polynomial
#0(2**n) - exponential
    #-subsets
    #O(k**n)
#O(n!)
    #-factorial
    #permutations

# 6) set definition
#     O(g) = { f | f does not dominate g}

# 7) space and time



