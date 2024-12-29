---
theme:academic
title: SODA25

---
# Consensus Model
- Each vertex $u \in V$ holds an opinion $\sigma(v) \in [k]$
- Markov chain $(\sigma_t)_{t\ge 0}$, where $\sigma_t \in [k]^V$
  - Each state $\sigma \in [k]^V$ is called a **configuration**.
  - **Consensus**: a configuration where all $\sigma(v)$ are the same.
- Our interest: # of iterations to reach a consensus.
- Applications in:
  - distributed computing
  - chemical reaction network
  - model of opinion forming
---
