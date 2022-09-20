import * as bcrypt from 'bcrypt';

export async function hashpassword(rawPassword: string) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(rawPassword, salt);
}

export async function conmpareHash(
    rawPassword : string,
    hashedPassword: string,
) {
    return bcrypt.compare(rawPassword, hashedPassword )
}   