<motion.form
// onSubmit={onSubmit}
initial="hidden"
animate="visible"
variants={formVariants} >
<motion.div variants={itemVariants} className="mb-3 xs:mb-4">
{/_ <AuthInput
            id="username"
            placeholder="Your name"
            error={errors.username}
            registration={usernameRegistration}
            disabled={isProcessing}
          />_/}
<Input />
</motion.div>
<motion.div variants={itemVariants} className="mb-3 xs:mb-4">
{/_ <AuthInput
            id="email"
            placeholder="E-mail"
            error={errors.email}
            registration={emailRegistration}
            disabled={isProcessing}
          />_/}
</motion.div>
<motion.div variants={itemVariants} className="mb-3 xs:mb-4">
{/_ <AuthInput
            type="password"
            id="password"
            placeholder="Password"
            error={errors.password}
            registration={passwordRegistration}
            disabled={isProcessing}
          /> _/}
</motion.div>
<motion.div variants={itemVariants} className="mb-8">
{/_ <AuthInput
            type="password"
            id="passwordConfirmation"
            placeholder="Repeat your password"
            error={errors.passwordConfirmation}
            registration={passwordConfirmationRegistration}
            disabled={isProcessing}
          /> _/}
</motion.div>
<motion.div variants={itemVariants}>
{/_ <AuthButton
            type="submit"
            color="primary"
            aria-label="sign up"
            disabled={isProcessing}
          >
Sign up
</AuthButton> _/}
</motion.div>
</motion.form>
