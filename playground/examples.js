examples = {
"example-1-1":
`
(COMBO
  (MODULE 1-Absolute

    (IMPORT stdlib)

    (FUNCTION main
      (IMP
        (RETURN (abs -5))))

    (FUNCTION abs
      (IMP
        (PARAMS x)

        (IF (stdlib/lt x 0)
          (THEN (ASGN x (stdlib/mul -1 x))))

        (RETURN x)))
  )
)
`,
"example-1-2":
`
(COMBO
  (MODULE 2-Sum

    (IMPORT stdlib)

    (FUNCTION main
      (IMP
        (RETURN (sum 4))))

    (FUNCTION sum
      (IMP
        (PARAMS n)
        (VARS sum)

        (ASGN sum 0)

        (WHILE (stdlib/gt n 0)
          (ASGN sum (stdlib/add sum n))
          (ASGN n (stdlib/sub n 1)))

        (RETURN sum)))
  )
)
`,
"example-1-3":
`
(COMBO
  (MODULE 3-Classify

    (FUNCTION main
      (IMP
        (RETURN (classify "yellow"))))

    (FUNCTION classify
      (IMP
        (PARAMS color)

        (SWITCH color

          (CASE "red"
            (RETURN "stop"))

          (CASE "yellow"
            (RETURN "wait"))

          (CASE "green"
            (RETURN "go"))

          (CASE ELSE
            (RETURN "error")))))
  )
)
`,
"example-2-1":
`
(COMBO
  (MODULE 4-Identity

    (FUNCTION main
      (FNC (id "a")))

    (FUNCTION id
      (FNC
        (ABS x
          x)))
  )
)
`,
"example-2-2":
`
(COMBO
  (MODULE 5-Composition

    (IMPORT stdlib)

    (FUNCTION main
      (FNC
        (comp
          (ABS x (stdlib/add x 1))
          (ABS x (stdlib/mul x 2))
          4)))

    (FUNCTION comp
      (FNC
        (ABS f g x
          (APP f
            (APP g x)))))
  )
)
`,
"example-2-3":
`
(COMBO
  (MODULE 6-Twice

    (IMPORT stdlib)

    (FUNCTION main
      (FNC
        (twice
          (ABS x (stdlib/add x 1))
          2)))

    (FUNCTION twice
      (FNC
        (ABS f x
          (APP f
            (APP f x)))))
  )
)
`,
"example-3-1":
`
(COMBO
  (MODULE 7-Arithmetic

    (FUNCTION main
      (RWR
        (RULE
          (READ ("start"))
          (WRITE
            (arith
              ("add"
                0
                ("mul" 1 "n")))))))
           
    (FUNCTION arith
      (RWR
        (RULE
          (VARS x)
          (READ ("start" x))
          (WRITE x))

        (RULE
          (VARS x)
          (READ ("add" x 0))
          (WRITE x))

        (RULE
          (VARS x)
          (READ ("add" 0 x))
          (WRITE x))

        (RULE
          (VARS x)
          (READ ("mul" x 1))
          (WRITE x))

        (RULE
          (VARS x)
          (READ ("mul" 1 x))
          (WRITE x))))
  )
)
`,
"example-3-2":
`
(COMBO
  (MODULE 8-Boolean

    (FUNCTION main
      (RWR
          (READ ("start"))
          (WRITE
            (bool
              ("not"
                ("and"
                  true
                  ("or" false "a")))))))

    (FUNCTION bool
      (RWR
        (RULE
          (VARS x)
          (READ ("start" x))
          (WRITE x))

        (RULE
          (READ ("not" true))
          (WRITE false))

        (RULE
          (READ ("not" false))
          (WRITE true))

        (RULE
          (VARS x)
          (READ ("and" true x))
          (WRITE x))

        (RULE
          (VARS x)
          (READ ("or" false x))
          (WRITE x))))
  )
)
`,
"example-3-3":
`
(COMBO
  (MODULE 9-Peano

    (FUNCTION main
      (RWR
        (RULE
          (VARS x)
          (READ ("start"))
          (WRITE
            (peano
              ("add"
                ("succ" ("succ" "zero"))
                ("succ" "zero")))))))

    (FUNCTION peano
      (RWR
        (RULE
          (VARS x)
          (READ ("start" x))
          (WRITE x))

        (RULE
          (VARS x)
          (READ ("add" "zero" x))
          (WRITE x))

        (RULE
          (VARS x y)
          (READ ("add" ("succ" x) y))
          (WRITE ("succ" ("add" x y))))))
  )
)
`,
"example-4-1":
`
(COMBO
  (MODULE 10-Math

    (IMPORT stdlib)

    (FUNCTION main
      (IMP
        (RETURN
          (distance 2 5))))
    
    (FUNCTION abs
      (IMP
        (PARAMS x)

        (IF (stdlib/lt x 0)
          (THEN (ASGN x (stdlib/mul -1 x))))

        (RETURN x)))

    (FUNCTION distance
      (IMP
        (PARAMS a b)

        (RETURN
          (abs (stdlib/sub a b)))))
  )
)
`,
"example-4-2":
`
(COMBO
  (MODULE 11-Functional

    (IMPORT stdlib)

    (FUNCTION main
      (IMP
        (RETURN
          (fourthPower 2))))

    (FUNCTION twice
      (FNC
        (ABS f x
          (APP f
            (APP f x)))))

    (FUNCTION square
      (IMP
        (PARAMS x)

        (RETURN (stdlib/mul x x))))

    (FUNCTION fourthPower
      (IMP
        (PARAMS x)

        (RETURN
          (twice square x))))
  )
)
`,
"example-4-3":
`
(COMBO
  (MODULE 12-Algebra

    (FUNCTION main
      (IMP
        (RETURN
          (simplify
            ("mul"
              ("add" "a" 0)
              1)))))

    (FUNCTION simplify
      (RWR
        (RULE
          (VARS x)
          (READ ("start" x))
          (WRITE x))

        (RULE
          (VARS x)
          (READ ("add" x 0))
          (WRITE x))

        (RULE
          (VARS x)
          (READ ("mul" x 1))
          (WRITE x))))
  )
)
`
}

