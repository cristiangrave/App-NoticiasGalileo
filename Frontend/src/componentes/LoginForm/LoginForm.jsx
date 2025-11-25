overflow: hidden;
        }

        .stars, .stars2, .stars3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100 %;
  background: transparent;
}

        .stars {
  background - image:
  radial - gradient(2px 2px at 20px 30px, white, transparent),
    radial - gradient(2px 2px at 60px 70px, white, transparent),
    radial - gradient(1px 1px at 50px 50px, white, transparent),
    radial - gradient(1px 1px at 130px 80px, white, transparent),
    radial - gradient(2px 2px at 90px 10px, white, transparent);
  background - repeat: repeat;
  background - size: 200px 200px;
  animation: twinkle 3s ease -in -out infinite;
}

        .stars2 {
  background - image:
  radial - gradient(1px 1px at 40px 60px, white, transparent),
    radial - gradient(1px 1px at 110px 90px, white, transparent),
    radial - gradient(1px 1px at 150px 30px, white, transparent),
    radial - gradient(2px 2px at 70px 120px, white, transparent);
  background - repeat: repeat;
  background - size: 250px 250px;
  animation: twinkle 4s ease -in -out infinite;
  animation - delay: 1s;
}

        .stars3 {
  background - image:
  radial - gradient(1px 1px at 80px 10px, white, transparent),
    radial - gradient(1px 1px at 160px 120px, white, transparent),
    radial - gradient(1px 1px at 30px 80px, white, transparent),
    radial - gradient(2px 2px at 120px 50px, white, transparent);
  background - repeat: repeat;
  background - size: 300px 300px;
  animation: twinkle 5s ease -in -out infinite;
  animation - delay: 2s;
}

@keyframes twinkle {
  0 %, 100 % {
    opacity: 0.5;
  }
  50 % {
    opacity: 1;
  }
}

@keyframes fade -in {
  from {
  opacity: 0;
  transform: translateY(20px);
}
          to {
  opacity: 1;
  transform: translateY(0);
}
        }

        .animate - fade -in {
  animation: fade -in 0.6s ease- out;
        }
`}</style>
    </div>
  );
};

export default LoginForm;
