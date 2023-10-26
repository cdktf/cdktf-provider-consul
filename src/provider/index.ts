/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsulProviderConfig {
  /**
  * The HTTP(S) API address of the agent to use. Defaults to "127.0.0.1:8500".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#address ConsulProvider#address}
  */
  readonly address?: string;
  /**
  * A path to a PEM-encoded certificate authority used to verify the remote agent's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#ca_file ConsulProvider#ca_file}
  */
  readonly caFile?: string;
  /**
  * A path to a directory of PEM-encoded certificate authority files to use to check the authenticity of client and server connections. Can also be specified with the `CONSUL_CAPATH` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#ca_path ConsulProvider#ca_path}
  */
  readonly caPath?: string;
  /**
  * PEM-encoded certificate authority used to verify the remote agent's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#ca_pem ConsulProvider#ca_pem}
  */
  readonly caPem?: string;
  /**
  * A path to a PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#cert_file ConsulProvider#cert_file}
  */
  readonly certFile?: string;
  /**
  * PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#cert_pem ConsulProvider#cert_pem}
  */
  readonly certPem?: string;
  /**
  * The datacenter to use. Defaults to that of the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#datacenter ConsulProvider#datacenter}
  */
  readonly datacenter?: string;
  /**
  * HTTP Basic Authentication credentials to be used when communicating with Consul, in the format of either `user` or `user:pass`. This may also be specified using the `CONSUL_HTTP_AUTH` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#http_auth ConsulProvider#http_auth}
  */
  readonly httpAuth?: string;
  /**
  * Boolean value to disable SSL certificate verification; setting this value to true is not recommended for production use. Only use this with scheme set to "https".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#insecure_https ConsulProvider#insecure_https}
  */
  readonly insecureHttps?: boolean | cdktf.IResolvable;
  /**
  * A path to a PEM-encoded private key, required if `cert_file` or `cert_pem` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#key_file ConsulProvider#key_file}
  */
  readonly keyFile?: string;
  /**
  * PEM-encoded private key, required if `cert_file` or `cert_pem` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#key_pem ConsulProvider#key_pem}
  */
  readonly keyPem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#namespace ConsulProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * The URL scheme of the agent to use ("http" or "https"). Defaults to "http".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#scheme ConsulProvider#scheme}
  */
  readonly scheme?: string;
  /**
  * The ACL token to use by default when making requests to the agent. Can also be specified with `CONSUL_HTTP_TOKEN` or `CONSUL_TOKEN` as an environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#token ConsulProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#alias ConsulProvider#alias}
  */
  readonly alias?: string;
  /**
  * auth_jwt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#auth_jwt ConsulProvider#auth_jwt}
  */
  readonly authJwt?: ConsulProviderAuthJwt;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#header ConsulProvider#header}
  */
  readonly header?: ConsulProviderHeader[] | cdktf.IResolvable;
}
export interface ConsulProviderAuthJwt {
  /**
  * The name of the auth method to use for login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#auth_method ConsulProvider#auth_method}
  */
  readonly authMethod: string;
  /**
  * The bearer token to present to the auth method during login for authentication purposes. For the Kubernetes auth method this is a [Service Account Token (JWT)](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#service-account-tokens).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#bearer_token ConsulProvider#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * Specifies arbitrary KV metadata linked to the token. Can be useful to track origins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#meta ConsulProvider#meta}
  */
  readonly meta?: { [key: string]: string };
  /**
  * Whether to use a [Terraform Workload Identity token](https://developer.hashicorp.com/terraform/cloud-docs/workspaces/dynamic-provider-credentials/workload-identity-tokens). The token will be read from the `TFC_WORKLOAD_IDENTITY_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#use_terraform_cloud_workload_identity ConsulProvider#use_terraform_cloud_workload_identity}
  */
  readonly useTerraformCloudWorkloadIdentity?: boolean | cdktf.IResolvable;
}

export function consulProviderAuthJwtToTerraform(struct?: ConsulProviderAuthJwt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    bearer_token: cdktf.stringToTerraform(struct!.bearerToken),
    meta: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.meta),
    use_terraform_cloud_workload_identity: cdktf.booleanToTerraform(struct!.useTerraformCloudWorkloadIdentity),
  }
}

export interface ConsulProviderHeader {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#name ConsulProvider#name}
  */
  readonly name: string;
  /**
  * The value of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#value ConsulProvider#value}
  */
  readonly value: string;
}

export function consulProviderHeaderToTerraform(struct?: ConsulProviderHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs consul}
*/
export class ConsulProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsulProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsulProvider to import
  * @param importFromId The id of the existing ConsulProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsulProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs consul} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsulProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConsulProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'consul',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.19.0',
        providerVersionConstraint: '~> 2.16'
      },
      terraformProviderSource: 'consul'
    });
    this._address = config.address;
    this._caFile = config.caFile;
    this._caPath = config.caPath;
    this._caPem = config.caPem;
    this._certFile = config.certFile;
    this._certPem = config.certPem;
    this._datacenter = config.datacenter;
    this._httpAuth = config.httpAuth;
    this._insecureHttps = config.insecureHttps;
    this._keyFile = config.keyFile;
    this._keyPem = config.keyPem;
    this._namespace = config.namespace;
    this._scheme = config.scheme;
    this._token = config.token;
    this._alias = config.alias;
    this._authJwt = config.authJwt;
    this._header = config.header;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this._address;
  }
  public set address(value: string | undefined) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this._caFile;
  }
  public set caFile(value: string | undefined) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // ca_path - computed: false, optional: true, required: false
  private _caPath?: string; 
  public get caPath() {
    return this._caPath;
  }
  public set caPath(value: string | undefined) {
    this._caPath = value;
  }
  public resetCaPath() {
    this._caPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPathInput() {
    return this._caPath;
  }

  // ca_pem - computed: false, optional: true, required: false
  private _caPem?: string; 
  public get caPem() {
    return this._caPem;
  }
  public set caPem(value: string | undefined) {
    this._caPem = value;
  }
  public resetCaPem() {
    this._caPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPemInput() {
    return this._caPem;
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this._certFile;
  }
  public set certFile(value: string | undefined) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_pem - computed: false, optional: true, required: false
  private _certPem?: string; 
  public get certPem() {
    return this._certPem;
  }
  public set certPem(value: string | undefined) {
    this._certPem = value;
  }
  public resetCertPem() {
    this._certPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPemInput() {
    return this._certPem;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this._datacenter;
  }
  public set datacenter(value: string | undefined) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // http_auth - computed: false, optional: true, required: false
  private _httpAuth?: string; 
  public get httpAuth() {
    return this._httpAuth;
  }
  public set httpAuth(value: string | undefined) {
    this._httpAuth = value;
  }
  public resetHttpAuth() {
    this._httpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthInput() {
    return this._httpAuth;
  }

  // insecure_https - computed: false, optional: true, required: false
  private _insecureHttps?: boolean | cdktf.IResolvable; 
  public get insecureHttps() {
    return this._insecureHttps;
  }
  public set insecureHttps(value: boolean | cdktf.IResolvable | undefined) {
    this._insecureHttps = value;
  }
  public resetInsecureHttps() {
    this._insecureHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureHttpsInput() {
    return this._insecureHttps;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this._keyFile;
  }
  public set keyFile(value: string | undefined) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pem - computed: false, optional: true, required: false
  private _keyPem?: string; 
  public get keyPem() {
    return this._keyPem;
  }
  public set keyPem(value: string | undefined) {
    this._keyPem = value;
  }
  public resetKeyPem() {
    this._keyPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPemInput() {
    return this._keyPem;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this._scheme;
  }
  public set scheme(value: string | undefined) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // auth_jwt - computed: false, optional: true, required: false
  private _authJwt?: ConsulProviderAuthJwt; 
  public get authJwt() {
    return this._authJwt;
  }
  public set authJwt(value: ConsulProviderAuthJwt | undefined) {
    this._authJwt = value;
  }
  public resetAuthJwt() {
    this._authJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authJwtInput() {
    return this._authJwt;
  }

  // header - computed: false, optional: true, required: false
  private _header?: ConsulProviderHeader[] | cdktf.IResolvable; 
  public get header() {
    return this._header;
  }
  public set header(value: ConsulProviderHeader[] | cdktf.IResolvable | undefined) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      ca_file: cdktf.stringToTerraform(this._caFile),
      ca_path: cdktf.stringToTerraform(this._caPath),
      ca_pem: cdktf.stringToTerraform(this._caPem),
      cert_file: cdktf.stringToTerraform(this._certFile),
      cert_pem: cdktf.stringToTerraform(this._certPem),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      http_auth: cdktf.stringToTerraform(this._httpAuth),
      insecure_https: cdktf.booleanToTerraform(this._insecureHttps),
      key_file: cdktf.stringToTerraform(this._keyFile),
      key_pem: cdktf.stringToTerraform(this._keyPem),
      namespace: cdktf.stringToTerraform(this._namespace),
      scheme: cdktf.stringToTerraform(this._scheme),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
      auth_jwt: consulProviderAuthJwtToTerraform(this._authJwt),
      header: cdktf.listMapper(consulProviderHeaderToTerraform, true)(this._header),
    };
  }
}
